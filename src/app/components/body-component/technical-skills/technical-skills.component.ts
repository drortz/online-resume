import { Component } from '@angular/core';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}
@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.css']
})
export class TechnicalSkillsComponent {

  public techStackMap: Map<string, string> = new Map();

  selectedItem: any;
  items: any[] | undefined;

  suggestions: any[] = []

  search(event: AutoCompleteCompleteEvent) {
    this.suggestions = Array.from(this.techStackMap.keys()).
      filter(key => key.toLowerCase().includes(event.query.toLowerCase().toString()));
  }

  clearSearch() {

  }

  ngOnInit() {
    this.techStackMap.set('Java','assets/TechStack/java-icon.png');
    this.techStackMap.set('Spring Boot','assets/TechStack/spring-boot-icon_2.png');

    this.techStackMap.set('Angular','assets/TechStack/angular-icon.png');
    this.techStackMap.set('JavaScript','assets/TechStack/javascript-icon.png');
    this.techStackMap.set('Typescript','assets/TechStack/typescript-icon.png');

    this.techStackMap.set('NodeJS','assets/TechStack/nodejs-icon.png');
    this.techStackMap.set('NPM','assets/TechStack/npm-icon.png');

    this.techStackMap.set('Rest API','assets/TechStack/Rest_API_icon.png');

    this.techStackMap.set('Lit HTML','assets/TechStack/Lit_HTML_icon.png');

    this.techStackMap.set('PrimeNG','assets/TechStack/primeng_icon.png');
    this.techStackMap.set('Bootstrap','assets/TechStack/bootstrap-icon.png');
    this.techStackMap.set('agGrid','assets/TechStack/aggrid_icon.png');

    this.techStackMap.set('AWS','assets/TechStack/amazon-web-services-icon.png');
    this.techStackMap.set('AWS S3','assets/TechStack/aws_s3-icon.png');
    this.techStackMap.set('Lambda','assets/TechStack/awslambda-icon.png');

    this.techStackMap.set('Maven','assets/TechStack/Apache_Maven_logo.png');
    this.techStackMap.set('Gradle','assets/TechStack/gradle_icon_.png');

    this.techStackMap.set('Kibana','assets/TechStack/kibana-icon.png');
    this.techStackMap.set('Kubernetes','assets/TechStack/kubernetes-icon.png');

    this.techStackMap.set('HTML','assets/TechStack/html-icon.png');
    this.techStackMap.set('CSS','assets/TechStack/css-icon.png');

    this.techStackMap.set('Docker','assets/TechStack/docker-icon.png');

    this.techStackMap.set('ElasticSearch','assets/TechStack/elasticsearch-icon.png');
    this.techStackMap.set('Git','assets/TechStack/git-icon.png');

    this.techStackMap.set('SQL','assets/TechStack/sql-icon.png');
    this.techStackMap.set('Swagger','assets/TechStack/swagger-icon.png');

    this.techStackMap.set('Jenkins','assets/TechStack/jenkins-icon.png');
    this.techStackMap.set('Jira','assets/TechStack/jira-icon.png');
    this.techStackMap.set('JSON','assets/TechStack/json-icon.png');
    this.techStackMap.set('Junit','assets/TechStack/JUnit_5_icon.png');

    this.techStackMap.set('Logstash','assets/TechStack/logstash-icon.png');
    this.techStackMap.set('Mockito','assets/TechStack/Mockito_Logo.png');
    this.techStackMap.set('MongoDB','assets/TechStack/mongodb-icon.png');

    this.techStackMap.set('OpenShift','assets/TechStack/openshift-icon.png');

    this.techStackMap.set('SonarQube','assets/TechStack/sonarqube-icon.png');
    this.techStackMap.set('Scrum','assets/TechStack/sprint-iteration-icon.png');

    this.techStackMap.set('InteliJ','assets/TechStack/IntelliJ_IDEA_icon.png');
    this.techStackMap.set('VisualStudio','assets/TechStack/visual-studio-code-icon.png');
    this.techStackMap.set('Tomcat','assets/TechStack/tomcat-icon.png');
    this.techStackMap.set('Eclipse','assets/TechStack/eclipse_icon.png');


    this.suggestions = Array.from(this.techStackMap.keys());
    // this.selectedItem = Array.from(this.techStackMap.keys());
  }

}
