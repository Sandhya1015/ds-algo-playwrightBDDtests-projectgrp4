pipeline {
    agent any
    tools {
        nodejs 'NodeJS-18'
    }
    environment {
        BASE_URL = 'https://dsportalapp.herokuapp.com'
        HEADLESS  = 'true'
        CI        = 'true'
    }
    stages {
        stage('Checkout') {
            steps {
                echo 'Pulling code from GitHub...'
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }
        stage('Install Playwright Browsers') {
            steps {
                echo 'Installing browsers...'
                bat 'npx playwright install'
            }
        }
        stage('Generate BDD Spec Files') {
            steps {
                echo 'Generating BDD spec files...'
                bat 'npx bddgen'
            }
        }
        stage('Cross Browser Tests') {
            parallel {
                stage('Chrome') {
                    steps {
                        echo 'Running tests on Chrome...'
                        bat 'npx playwright test --project=chromium --grep-invert "@bug"'
                    }
                }
                stage('Firefox') {
                    steps {
                        echo 'Running tests on Firefox...'
                        bat 'npx playwright test --project=firefox --grep-invert "@bug"'
                    }
                }
                stage('Safari') {
                    steps {
                        echo 'Running tests on Safari...'
                        bat 'npx playwright test --project=webkit --grep-invert "@bug"'
                    }
                }
            }
        }
        stage('Generate Allure Report') {
            steps {
                echo 'Generating Allure report...'
                bat 'npx allure generate allure-results --clean -o allure-report'
            }
        }
    }
    post {
        always {
            echo 'Pipeline finished.'
            archiveArtifacts artifacts: 'allure-report/**/*', allowEmptyArchive: true
        }
        success {
            echo 'All Tests Passed!'
        }
        failure {
            echo 'Tests Failed - check the report!'
        }
    }
}