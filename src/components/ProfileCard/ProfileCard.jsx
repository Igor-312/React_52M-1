import "./styles.css";
import { homeworkData } from "./data";

function ProfileCard() {
  //до return прописываем логику
  console.log(homeworkData);

  return (
    <div className="profile-card__avatar">
      <img src={homeworkData.homework_img} />
      <h3>Homework {homeworkData.homework_number}</h3>
      <div>Neme: {homeworkData.name}</div>
      <div>Occupation: {homeworkData.occupation}</div>
      <div>Hobbyes: {homeworkData.hobbies}</div>
    </div>
  );
}

export default ProfileCard;