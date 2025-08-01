pipeline {
    agent { label 'ansible-node' }

    stages {
        stage('Docker Build - Ansible') {
            steps {
                dir("${WORKSPACE}") {
                    sh 'ansible-playbook Ansible-Roles/build-playbook.yaml'
                }
            }
        }
    }
}
