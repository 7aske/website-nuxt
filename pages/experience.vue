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
    position: "Backend developer",
    description: "Backend developer at Vega IT",
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
    position: "Fullstack developer",
    description: "Developed and deployed a web system consisting of a website, webshop and a blog for a local massage centre",
    startDate: new Date(2020, 1),
    endDate: new Date(2020, 7),
  },
  {
    position: "Fullstack developer, Devops engineer",
    description: "Intern at Metropolitan University Faculty of Information Technologies involved in development of service oriented informational systems mostly using Angular, React, Spring Boot and Flask. Experience in setting up production environments and deploying to Ubuntu and CentOS servers. Took part in great deal of problem solving and debugging of production systems. Experience in database design, backup and migrations using mostly MySQL but also NoSQL databases such as MongoDB. Mostly focused on developing clean backend API's with complex database structure.",
    startDate: new Date(2019, 9),
  },
  {
    position: "Student",
    description: "Student at Metropolitan University Faculty of Information Technologies department of software engineering.",
    startDate: new Date(2018, 9),
  },
  {
    position: "Fullstack developer",
    description: "Developer working on fixing last-minute issues in a complex distributed .NET Core application for for Croatian HGK.",
    startDate: new Date(2021, 11),
    endDate: new Date(2021, 11),
  },
  {
    position: "Fullstack developer",
    description: "Developer working on re-writing a HR salary application from COBOL to Java using Spring Boot, Thymeleaf and MySQL.",
    startDate: new Date(2022, 3),
  },
];

experiences.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
</script>
