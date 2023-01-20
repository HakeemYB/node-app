// Jenkinsfile Script
pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                
                sh 'docker build -t beyghakymyar/nodeapp:nodeapp_1.1 .'
            }
        }

        stage('Start Container') {
            steps {
                sh 'docker rm -f nodeapi'
                sh 'docker run -d -p 8088:4000 --name nodeapi beyghakymyar/nodeapp:nodeapp_1.1'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                sh 'docker login --username beyghakymyar --password yaaraan@123'
                sh 'docker push beyghakymyar/nodeapp:nodeapp_1.1'
            }
        }
    }
}