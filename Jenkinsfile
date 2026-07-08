pipeline {
    agent any

    stages {
        stage('Checkout Confirm') {
            steps {
                echo 'Repo checked out successfully!'
                bat 'dir'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'
        }
    }
}
