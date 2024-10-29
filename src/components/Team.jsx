import React from "react";

const Team = () => {
  // Placeholder data with three properties: headshot, name, and title
  const teamMembers = [
    {
      headshot:
        "/polaroids/Jennifer Lee - President.png",
      name: "Jennifer Lee",
      title: "President",
      id: "pic1",
    },
    {
      headshot: "/polaroids/Deeva Thomas - Vice President.png",
      name: "Deeva Thomas",
      title: "Vice President",
      id: "pic2",
    },
    {
      headshot:
        "/polaroids/Mark Wong - Designer.png",
      name: "Mark Wong",
      title: "Head of Design",
      id: "pic3",
    },
    {
      headshot: "/polaroids/Ketana Anekar - Treasurer.png",
      name: "Ketana Anekar",
      title: "Treasurer",
      id: "pic4",
    },
    {
      headshot:
        "/polaroids/Minkyung Cho - Developer.png",
      name: "Minkyung Cho",
      title: "Developer",
      id: "pic5",
    },
    {
      headshot:
        "/polaroids/charis pao.png",
      name: "Charis Pao",
      title: "Media Director",
      id: "pic6",
    },
    {
      headshot:
        "/polaroids/Reika Oh - Media Director.png",
      name: "Reika Oh",
      title: "Media Director",
      id: "pic7",
    },
    {
      headshot:
        "/polaroids/Joseph Crosthwaite - Operations.png",
      name: "Joseph Crosthwaite",
      title: "Operations",
      id: "pic8",
    }
  ];

  return (
    <div id="team">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member-profile">
          <img
            src={member.headshot}
            alt={`Headshot of ${member.name}`}
            className="team-member-headshot"
            id={member.id}
          />
          <div className="team-member-name">{member.name}</div>
          <div className="team-member-title">{member.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Team;
