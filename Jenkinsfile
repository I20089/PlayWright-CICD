pipeline {
    agent any

    tools {
        nodejs 'Node 18'
    }

    environment {
        // Set your test environment here (dev, qa, prod)
        TEST_ENV = 'dev'
        LOG_LEVEL = 'info'
        // Add more env vars as needed
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Node.js') {
            steps {
                // Assumes Node.js is managed by Jenkins or installed on the agent
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }

        stage('Generate Allure Report') {
            steps {
                sh 'npx allure generate ./allure-results --clean -o ./allure-report'
            }
        }

        stage('Archive Allure Report') {
            steps {
                archiveArtifacts artifacts: 'allure-report/**', fingerprint: true
            }
        }

        // Optional: Deploy WAR file if needed
        stage('Deploy WAR') {
            when {
                expression { fileExists('target/your-app.war') }
            }
            steps {
                // Example: Deploy WAR to Tomcat or another server
                // sh 'cp target/your-app.war /path/to/tomcat/webapps/'
                echo 'Deploy WAR step (customize as needed)'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished (post block)'
            // Publish Allure report in Jenkins if the plugin is installed
            allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
        }
    }
} 