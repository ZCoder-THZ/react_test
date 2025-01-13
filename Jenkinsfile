pipeline{
    agent any
    environment {
        // SERVER_CREDENTIALS=credentials('server-credentials')
        NEW_VERSION = '1.2.3'
    }
    stages{
        stage("build"){
            steps{
                   echo withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'DK_NAME', passwordVariable: 'DK_PASSWORD')]) {
                    echo "========building========"
                    sh 'echo $NEW_VERSION'
                    sh "docker build -t $DK_NAME/react-test:$NEW_VERSION ."
                }
            }
         
        }

    stage("pushToDocker") {
    steps {
        withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'DK_NAME', passwordVariable: 'DK_PASSWORD')]) {
            echo "======== Logging in to Docker ========"
            sh """
                echo $DK_PASSWORD | docker login -u $DK_NAME --password-stdin
                echo "======== Login Successful ========"
                
                # Example: Build and push Docker image
            
                docker push $DK_NAMEreact-test:$NEW_VERSION
            """
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