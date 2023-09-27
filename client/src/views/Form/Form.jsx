import { URL_API } from "../../redux/actionsTypes";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTeams } from "../../redux/actions";
import { validations } from "../validations";
import axios from "axios";
import styles from "./Form.module.css";

const Form = () => {
    const teams = useSelector((state) => state.teams);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [selectedTeams, setSelectedTeams] = useState([]);
    const [formError, setFormError] = useState({});
    const [form, setForm] = useState({
        name: "",
        lastName: "",
        nationality: "",
        dob: "",
        description: "",
        teams: [],
    })

    const handleValidation = () => {
        const errors = validations(form)
        setFormError(errors)
    }

    const handleFormData = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value })
    }

    const handleTeamsChange = (event) => {
        const selectedTeamId = event.target.value;
        setSelectedTeams((prevSelectedTeams) => {
            if (prevSelectedTeams.includes(selectedTeamId)) {
                return prevSelectedTeams.filter((id) => id !== selectedTeamId);
            } else {
                return [...prevSelectedTeams, selectedTeamId];
            }
        });
    }

    const handleRemoveTeam = (teamId) => {
        setSelectedTeams((prevSelectedTeams) => {
            return prevSelectedTeams.filter((id) => id !== teamId);
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post(`${URL_API}/drivers`, {
                name: form.name,
                lastName: form.lastName,
                nationality: form.nationality,
                image: form.image,
                dob: form.dob,
                description: form.description,
                teams: form.teams,
            });
            alert("Driver creado");
            navigate(-1);
        } catch (error) {
            alert("No es posible crear el driver");
        }
    };

    const disableButton = () => {
        let aux = true;
        console.log(aux);
        console.log(formError);

        if(Object.keys(formError).length === 0){
            aux = false
        }

        return aux
    }   

    useEffect(() => {
        dispatch(getTeams());
    }, [])

    useEffect(() => {
        const teamsTransform = selectedTeams.map((teamId) => parseInt(teamId))
        setForm((prevForm) => ({ ...prevForm, teams: teamsTransform }));
    }, [selectedTeams])

    useEffect(() => {
        handleValidation();
    }, [form])

    return (
        <div className={styles["form-Container"]}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>* Nombre:</label>
                <input type="text" name="name" onChange={handleFormData} />
                {formError.name ? (<p className={styles.error}>{formError.name}</p>) : (<p><br /></p>)}

                <label>* Apellido:</label>
                <input type="text" name="lastName" value={form.lastName} onChange={handleFormData} />
                {formError.lastName ? (<p className={styles.error}>{formError.lastName}</p>) : (<p><br /></p>)}

                <label>* Nacionalidad:</label>
                <input type="text" name="nationality" value={form.nationality} onChange={handleFormData} />
                {formError.nationality ? (<p className={styles.error}>{formError.nationality}</p>) : (<p><br /></p>)}

                <label>* Fecha de Nacimiento:</label>
                <input type="date" name="dob" value={form.dob} onChange={handleFormData} />
                {formError.dob ? (<p className={styles.error}>{formError.dob}</p>) : (<p><br /></p>)}

                <label>Descripción:</label>
                <textarea rows="5" type="text" name="description" value={form.description} onChange={handleFormData} />

                <div className={styles.selectTeams}>
                    <label>* Equipos:</label>
                    <select name="teams" id="" onChange={handleTeamsChange} value="">
                        <option value="" disabled>Selecciona un equipo</option>
                        {teams.map((team) => (
                            <option key={team.id} value={team.id}>
                                {team.name}
                            </option>
                        ))}
                    </select>
                    <div>
                        {selectedTeams.map((teamId) => {
                            const team = teams.find((team) => team.id == teamId);
                            return (
                                <div className={styles["team-checkbox"]} key={team.id}>
                                    <span>{team?.name}</span>
                                    <button className={styles.buttonX} onClick={() => handleRemoveTeam(teamId)}>X</button>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {formError.teams && <p className={styles.error}>{formError.teams}</p>}
                <br />

                <button className={styles.buttonSubmit} disabled={disableButton()} type="submit">Crear Driver</button>
            </form>
        </div >

    );
};

export default Form;