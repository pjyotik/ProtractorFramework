def workspace;
node{
    stage('checkout'){
        checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/pjyotik/ProtractorFramework.git']]])
        workspace = pwd()
        
    }
    stage('static code analysis'){
        echo "static code analysis"
    }
    stage('Build'){
        echo "Build the code"
    }
    stage('Testing'){
        echo "Testing the code"
    }
    stage('Delivery'){
        echo "Delivery"
    }
}
