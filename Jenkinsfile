pipeline {
    agent any
    environment{
        IMAGE_NAME = 'sample-node-app'
        IMAGE_TAG = '${env.BUILD_NUMBER}'
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
        stage('Docker Build'){
            steps{
                bat 'docker build -t %IMAGE_NAME%:%IMAGE_TAG% .'
                bat "docker tag %IMAGE_NAME%:%IMAGE_TAG% %IMAGE_NAME%:latest"
            }
        }
            
    }

    post {
        always {
            echo 'Pipeline finished'
        }
        success{
            echo 'Docker Image built: ${IMAGE_NAME}:${IMAGE_TAG}'
        }
    }
}
