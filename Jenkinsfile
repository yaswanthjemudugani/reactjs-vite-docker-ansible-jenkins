pipeline {
    agent { label 'ansible-node' }

    environment {
        AWS_SHARED_CREDENTIALS_FILE = '/home/yaswanth/.aws/credentials'
    }

    stages {
        stage('Docker Build - Ansible Playbook') {
            steps {
                dir("${WORKSPACE}") {
                    sh 'ansible-playbook Ansible-Roles/build-playbook.yaml'
                }
            }
        }

        stage('Push to ECR - Ansible Playbook') {
            steps {
                dir("${WORKSPACE}") {
                    sh 'ansible-playbook Ansible-Roles/push-ecr-playbook.yaml'
                }
            }
        }
    }
}
