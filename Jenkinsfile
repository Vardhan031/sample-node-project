pipeline {
    agent any
    environment{
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
        IMAGE_NAME = 'vardhanreddy24/sample-node-app'
    }

    stages {
        stage('Checkout Confirm') {
            steps {
                echo 'Repo checked out successfully!'
                bat 'dir'
            }
        }
        stage('Build'){
            steps{
                bat 'npm install'
            }
        }
        stage('Test'){
            steps{
                bat 'npm test'
            }
        }
        stage('Build Docker Image'){
            steps{
                bat 'docker build -t %IMAGE_NAME%:%BUILD_NUMBER% -t %IMAGE_NAME%:latest .'
            }
        }
        stage('Push to Docker Hub'){
            steps{
                bat 'docker login -u %DOCKERHUB_CREDENTIALS_USR% -p %DOCKERHUB_CREDENTIALS_PSW%'
                bat 'docker push %IMAGE_NAME%:%BUILD_NUMBER%'
                bat 'docker push %IMAGE_NAME%:latest'
            }
        }
            
    }

    post {
        always {
            echo 'Pipeline finished'
        }
        success{
            echo "Docker Image built: ${IMAGE_NAME}:${BUILD_NUMBER}"
        }
    }
}
