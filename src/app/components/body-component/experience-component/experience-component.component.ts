import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-component',
  templateUrl: './experience-component.component.html',
  styleUrls: ['./experience-component.component.css'],
})
export class ExperienceComponentComponent {

  public experience = [
    {
      header: 'Full Stack Developer & Scrum Master At Operative (June 2021 – February 2024)',
      description: '' +
        '<h6>Developing an advertising SaaS product for international media customers to manage advertising\n' +
        'space in both linear & digital platforms. <br>Running on Amazon AWS platform and provide a multi-tenant environment.</h6>' +
        '<ul><li>Developed and maintained several scalable Java applications using Spring Boot, JAVA, MongoDB, Angular, and Hibernate</li>' +
        '<li>Adopted tickets for the release in accordance with PO prioritizations and matched them to team capacity by making capacity calculations for each sprint/release</li>' +
        '<li>Managed priorities and backlog for the product roadmap</li>' +
        '<li>Facilitated sprint planning meetings, daily standups, sprint reviews, and retrospective meetings by the end of each sprint by providing the team with ongoing technical support and ensuring adherence to Agile principles</li>' +
        '<li>Developed and implemented responsive front-end application system designs and application architecture to optimize user experiences and enhance application functionality</li>' +
        '<li>Contributed to the identification and resolution of critical production issues and provided on-call client support</li>' +
        '<li>Mentored new employees by providing them with guidance and technical assistance to ensure high code quality</li></ul>'
    },
    {
      header: 'Full Stack Developer At Amdocs (September 2014 – May 2021)',
      description: '<h6>Participated in the development of an ordering management system (OMS) for the telecommunications industry, mainly for American Telephone & Telegraph Company (AT&T)</h6>' +
        '<ul><li>Customized a shelf product based on AT&T requirements and developed new functionalities by creating technical design and architecture, enhancing OMS capabilities, and streamlining order processing</li>' +
        '<li>Provided ongoing onshore and offshore customer support during each product release</li>' +
        '<li>Participated in a new widget UI implementation in close interaction with cross-functional teams</li>' +
        '<li>Collaborated closely with cross-functional teams, including product managers and quality assurance engineers, to define project requirements and design specifications based on various client business needs </li>' +
        '<li>Designed and implemented RESTful APIs to ensure data consistency and reliability between the front-end and back-end components of the ordering management system (OMS)</li>' +
        '<li>Conducted unit tests, continuous integration testing, and end-to-end testing strategies using JUnit, Mockito, and Cucumber to provide a high level of software quality and code reliability </li>' +
        '<li>Identified and resolved critical issues and bugs to optimize application performance, minimize disruptions and ensure high-quality project outcomes</li></ul>'
    },
    {
      header: 'Broadcasting Room Operator At RRsat (August 2011 – August 2014)',
      description: '<h6>operator in a TV broadcasting room by overseeing and controlling the worldwide TV channel broadcasting</h6>' +
        '<ul><li>Operated and maintained broadcasting equipment, including video and audio matrix, ensuring seamless broadcasts</li>' +
        '<li>Ingested and managed new content on remote FTP servers that operated a live transmission from satellite to client channel, ensuring smooth and high-quality broadcasts</li>' +
        '<li>Communicated with various clients around the world by providing technical support, troubleshooting issues, and making real-time adjustments</li>' +
        '<li>Performed ongoing monitoring to resolve on-air issues and took precautions to prevent broadcast interruptions</li>' +
        '<li>Conducted routine equipment checks and preventive maintenance to ensure optimal performance and prevent equipment failures</li></ul>'
    },
    {
      header: 'Operation Technician (Clean Room) At Micron (December 2009 – October 2010)',
      description: '<h6>Performed diverse technical support duties on a clean room production line for memory chips used in cellular devices and computers</h6>' +
        '<ul><li>Managed the operation of the ‘Etche’ stage that included engraving nanolayers for electronics circles using top-notch advanced technology machines</li>' +
        '<li>Conducted routine inspections of mechanical faults/equipment failures and implemented preventive measures to avoid recurring problems</li>' +
        '<li>Kept the workplace clean and tidy during and after the work process by adhering to strict clean room protocols, strict ISO standards, safety  and quality control procedures </li>'
    }
  ];
}
