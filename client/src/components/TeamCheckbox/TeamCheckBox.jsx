import styles from './TeamCheckbox.module.css';

const TeamCheckbox = ({ team, onChange }) => {
  const handleCheckboxChange = () => {
    onChange(team.id);
  };

  return (
    <div className={styles.containerCheckbox}>
      <input
        type="checkbox"
        id={team.id}
        value={team.id}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={team.id}>{team.name}</label>
    </div>
  );
};

export default TeamCheckbox;