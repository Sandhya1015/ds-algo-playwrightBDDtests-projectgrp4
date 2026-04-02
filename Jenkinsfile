pipeline {
    agent any

    tools {
        nodejs 'NodeJS-18'
    }

    environment {
        BASE_URL = 'https://dsportalapp.herokuapp.com'
        HEADLESS = 'true'
        CI = 'true'
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

        stage('Cross Browser Tests') {
            parallel {

                stage('Chrome') {
                    steps {
                        echo 'Running tests on Chrome...'
                        bat 'npm run test:chrome'
                    }
                }

                stage('Firefox') {
                    steps {
                        echo 'Running tests on Firefox...'
                        bat 'npm run test:firefox'
                    }
                }

                stage('Safari') {
                    steps {
                        echo 'Running tests on Safari...'
                        bat 'npm run test:safari'
                    }
                }
            }
        }

        stage('Generate Report') {
            steps {
                echo 'Generating HTML report...'
                bat 'node reports/generate-report.js'
            }
        }
    }

   post {
    always {
        echo 'Pipeline finished.'
        archiveArtifacts artifacts: 'reports/**/*', allowEmptyArchive: true
    }
    success {
        echo 'All Tests Passed!'
    }
    failure {
        echo 'Tests Failed - check the report!'
    }
}
        success {
            echo '✅ All Tests Passed!'
        }
        failure {
            echo '❌ Tests Failed — check the report!'
        }
    }
}