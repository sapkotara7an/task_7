
function ProfileInfo(member) {
    return (
      <>
      
        <div className="member_profile">
          <div className="image"></div>
          <h3>Name: {member.name}</h3>
          <h4 >Age: {member.age}</h4>
         
          <h4> Hobbies:</h4>
            {member.hobbies.map((hobbies)=> (
              
               <li key={hobbies}>
                 {hobbies} 
               </li>
              
            ))}
           
          <p className="bio">{member.bio}</p>
        </div>
        
      </>
    );
  }
  export default ProfileInfo;