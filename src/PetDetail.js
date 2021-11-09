import "./PetDetail.css";

function PetDetail({ petname, animal, age }) {
  return (
    <div className="pet-details">
      <h3 className="pet-name">Pet Name: {petname}</h3>
      <h4>Animal Type: {animal}</h4>
      <p className="pet-age">Pet Age: {age}</p>
      <div className="info">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nostrum
        sapiente eligendi in tenetur aperiam repellendus asperiores, commodi,
        harum, similique atque enim dignissimos eius aliquid modi laboriosam
        quis praesentium.
      </div>
    </div>
  );
}

export default PetDetail;
