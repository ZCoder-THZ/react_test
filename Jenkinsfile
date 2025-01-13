pipeline{
    agent any
    environment {
        // SERVER_CREDENTIALS=credentials('server-credentials')
        NEW_VERSION = '1.2.3'
    }
    stages{
        stage("build"){
            steps{
                echo withCredentials([usernamePassword(credentialsId: 'server-credentials', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    echo "========building========"
                    sh 'echo $USERNAME'
                    sh 'echo $PASSWORD'
                    sh 'echo $NEW_VERSION'
                }
            }
         
        }
            stage("test"){
            steps{
                echo "========testing========"
            }
         
        }
    }

}