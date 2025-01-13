pipeline{
    agent any
    environment {
        // SERVER_CREDENTIALS=credentials('server-credentials')
        
    }
    stages{
        stage("build"){
            steps{
                echo withCredentials([usernamePassword(credentialsId: 'server-credentials', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    echo "========building========"
                    sh 'echo $USERNAME'
                    sh 'echo $PASSWORD'
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