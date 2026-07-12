pipeline {
    agent any

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
        stage('Docker Check'){
            steps{
                bat 'docker --version'
            }
        }
            
    }

    post {
        always {
            echo 'Pipeline finished'
        }
    }
}
