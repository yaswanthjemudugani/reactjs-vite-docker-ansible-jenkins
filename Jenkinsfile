pipeline {
    agent { label 'ansible-node' }

    // environment {
    //     AWS_SHARED_CREDENTIALS_FILE = '/home/yaswanth/.aws/credentials'
    // }

    stages {
        stage('Inject Git Commit ID - Docker Image Tag') {
            steps {
                script {
                    def commitId = sh(script: 'git rev-parse --short HEAD', returnStdout: true).trim()
                    
                    // Update the vars in both role paths
                    sh """
                        sed -i 's/^docker_image_tag: .*/docker_image_tag: ${commitId}/' Ansible-Roles/roles/docker_build/vars/main.yaml
                        sed -i 's/^docker_image_tag: .*/docker_image_tag: ${commitId}/' Ansible-Roles/roles/docker_push_to_ecr/vars/main.yaml
                        sed -i 's/^docker_image_tag: .*/docker_image_tag: ${commitId}/' Ansible-Roles/roles/docker_run_from_ecr/vars/main.yaml
                        echo "Docker image will be tagged with commit ID: ${commitId}"
                    """
                }
            }
        }

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

        stage('Cleanup Docker Images') {
            steps {
                script {
                    echo '🧹 Cleaning up all local Docker images...'
                    sh 'docker rmi -f $(docker images -qa) || true'
                }
            }
        }

        stage('Run Container from ECR - Ansible Playbook') {
            steps {
                dir("${WORKSPACE}") {
                    sh 'ansible-playbook Ansible-Roles/run-container-playbook.yaml'
                }
            }
        }
    }
}
