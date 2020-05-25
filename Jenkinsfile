def workspace;
node{
    stage('checkout'){
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/pjyotik/ProtractorFramework.git']]])
        workspace = pwd()
        
    }
    stage('Build'){
        echo "Build the code"
        call npm install
    }
    stage('Testing'){
        echo "Running Test"
        protractor conf\conf.js
    }
    stage('Delivery'){
        echo "Delivery"
    }
}
