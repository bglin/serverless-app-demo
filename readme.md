# serverless-file-processing
![arch diagram](https://github.com/takeoff-projects/brunolin/blob/main/arch.png)
## Quick Start
1. Login to your GCP Project (https://console.cloud.google.com/)
2. Open Cloud Shell 
3. confirm that the environment variable `$GOOGLE_CLOUD_PROJECT` is set (Google automatically sets this)

4. In cloud shell: 


      `git clone https://github.com/bglin/serverless-app-demo.git gcp-app`

      `cd gcp-app`

      `sh start_my_app.sh` 

      `gcloud run services describe react-frontend --platform managed --region us-central1 --format 'value(status.url)'` (to display app url)
