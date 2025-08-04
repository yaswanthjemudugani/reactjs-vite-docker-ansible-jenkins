pipeline {
    agent { label 'ansible-node' }

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
                    sh 'ansible-playbook Ansible-Roles/push-to-ecr-playbook.yaml'
                }
            }
        }
    }
}
