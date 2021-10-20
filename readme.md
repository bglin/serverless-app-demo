# serverless-app-demo

 demo link - https://react-frontend-bmkarmw2nq-uc.a.run.app/

![arch diagram](https://github.com/bglin/serverless-app-demo/blob/main/arch.png)

## Quick Start
1. Login to your GCP Project (https://console.cloud.google.com/)
2. Open Cloud Shell 
3. confirm that the environment variable `$GOOGLE_CLOUD_PROJECT` is set (Google automatically sets this)

4. In cloud shell: 


      `git clone https://github.com/bglin/serverless-app-demo.git gcp-app`

      `cd gcp-app`

      `sh start_my_app.sh` 

      `gcloud run services describe react-frontend --platform managed --region us-central1 --format 'value(status.url)'` (to display app url)

![app1](https://github.com/bglin/serverless-app-demo/blob/main/app1.png)

![app2](https://github.com/bglin/serverless-app-demo/blob/main/app2.png)

![app3](https://github.com/bglin/serverless-app-demo/blob/main/app3.png)