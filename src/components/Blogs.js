import "../App";
const Profile = () => {
  return (
    <div className="profile-item">
      <img
        style={{ width: "314px" }}
        src="https://images.unsplash.com/photo-1445077100181-a33e9ac94db0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="img-coffee"
      />
      <h2>Tasty And Refreshing Coffee</h2>
      <h4>By Admin/Ist May,2021</h4>
      <p>
        lorem Ispum Dolor Sit Amet Consector <br /> Adiplisicing Elit.Nist,Culpa
      </p>
      <button className="btn btn-1">Read More</button>
    </div>
  );
};

export default Profile;
