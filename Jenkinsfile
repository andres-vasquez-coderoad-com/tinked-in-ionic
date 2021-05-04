#!/bin/groovy
pipeline {
    agent any
    tools {
        gradle "Default"
        nodejs "10.16.3"
    }
    stages {
        stage('Build') {
            steps {
                script {
                   stage('System Requirements') {
                         sh 'npm install -g ionic'
                         sh 'npm install @capacitor/core @capacitor/cli'
                   }

                   stage('build') {
                        stage('Clean Environment if exists') {
                         try {
                          sh 'rm -rf android'
                         } catch (e) {}
                        }

                        stage('Install dependencies and prepare') {
                         sh 'rm -rf node_modules'
                         sh 'npm install'

                         sh 'npm run build'
                         sh 'ionic build'
                        }

                        stage('Run tests - Unit Tests') {
                         sh 'npm run test'
                        }

                        stage('Create Build Packages Android') {
                         try {
                          sh 'npx cap add android'
                          sh 'ionic capacitor copy'
                          sh 'cd android && ./gradlew assembleDebug'
                        }

                       stage('Stage Archive Android') {
                        // tell Jenkins to archive the apks
                        archiveArtifacts artifacts: 'android/app/build/outputs/apk/debug/app-debug.apk', fingerprint: true
                       }

                       stage('Copy artifact to public place') {
                           String pathArtAndroid = "${env.WORKSPACE}" + "/android/app/build/outputs/apk/debug/app-debug.apk"
                           pathArtAndroid = pathArtAndroid.replaceAll(' ','\\\\ ')
                           sh 'mv ' +pathArtAndroid+ ' /Users/Shared/'
                     }
                }
            }
        }
    }
}
}

