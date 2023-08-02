pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('build & deploy') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}
