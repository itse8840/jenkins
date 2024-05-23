pipeline {
    agent any

    tools {
        nodejs "NodeJS 20.x" // 如果你使用了NodeJS插件，这个名称应该和你在Jenkins中配置的名称一致
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/itse8840/jenkins.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                // 示例：部署到远程服务器或某个环境
                // 这里我们仅打印一条信息作为示例
                echo 'Looking here, deploying application...'
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
