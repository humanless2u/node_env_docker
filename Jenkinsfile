pipeline {
    agent {
        docker { image 'node:14-alpine' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'echo hello from jenkinsfile'
                sh 'node --version'
            }
        }
    }
}