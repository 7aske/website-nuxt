<template>
  <div>
    <Head>
      <Title>Experience</Title>
    </Head>
    <terminal>
      <prompt>cat ~/experience</prompt>
      <experience-item v-for="exp in experiences" :experience="exp"/>
      <br>
      <prompt/>
    </terminal>
  </div>

</template>


<script setup lang="ts">

import { Experience } from "~/common/Experience";

const experiences: Experience[] = [
  {
    position: "Backend developer, Tech mentor",
    description: "Software engineer at Vega IT working on various projects and as a Java Tech mentor. Work included working on a service-oriented employee skill and status tracking system as a Backend developer, crypto-currency banking integration system mainly as a Spring Boot Developer and also as a Full-stack developer using MERN stack. Together with regular engagements, my tasks included mentoring and helping colleagues master Java related technologies as a part of my Tech mentor role. There I was in charge of conducting daily code reviews, teaching sessions, tracking theirprogress and organizing mock interviews.",
    startDate: new Date(2022, 1),
  },
  {
    position: "Backend developer",
    description: "Backend and architectural engineer of a employee management system with analytics for a local massage centre.",
    startDate: new Date(2021, 3),
    endDate: new Date(2021, 6),
  },
  {
    position: "Backend developer",
    description: "Co-developed and managed a real estate advertising system for a domestic real estate business.",
    startDate: new Date(2020, 11),
    endDate: new Date(2021, 5),
  },
  {
    position: "Full-stack developer",
    description: "Developed and deployed a web system consisting of a website, a webshop and a blog for a local massage centre",
    startDate: new Date(2020, 1),
    endDate: new Date(2020, 7),
  },
  {
    position: "Full-stack developer, Devops engineer",
    description: "Intern at Metropolitan University Faculty of Information Technologies involved in development of service oriented informational systems mostly using Angular, React, Spring Boot and Flask. Experience in setting up production environments and deploying to Ubuntu and CentOS servers. Took part in great deal of problem solving and debugging of production systems. Experience in database design, backup and migrations using mostly MySQL but also NoSQL databases such as MongoDB. Mostly focused on developing clean backend API's with complex database structure.",
    startDate: new Date(2019, 9),
    endDate: new Date(2022, 5),
  },
  {
    position: "Student",
    description: "Student at Metropolitan University Faculty of Information Technologies department of software engineering.",
    startDate: new Date(2018, 9),
  },
  {
    position: "Full-stack developer",
    description: "Developer working on fixing last-minute issues in a complex distributed .NET Core application for for Croatian HGK.",
    startDate: new Date(2021, 11),
    endDate: new Date(2021, 11),
  },
  // {
  //   position: "Full-stack developer",
  //   description: "Developer working on re-writing a HR salary application from COBOL to Java using Spring Boot, Thymeleaf and MySQL.",
  //   startDate: new Date(2022, 3),
  // },
];

experiences.sort((a, b) => {
  if (a.endDate === undefined) return 1;
  if (b.endDate === undefined) return 0;
  return b.endDate.getTime() - a.endDate.getTime()
});
</script>
