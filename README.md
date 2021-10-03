# semantic-video-visualiser
An interactive visualisation of semantically similar movie trailers. 

Visit the page here https://semantic-video-visualiser-vr0ec5ue7-ed-fish.vercel.app/#

A visualisation of the MMX-20 Dataset and results from the paper 
``E. Fish, J. Weinbren and A. Gilbert, "Rethinking Genre Classification With Fine Grained Semantic Clustering," 2021 IEEE International Conference on Image Processing (ICIP), 2021, pp. 1274-1278, doi: 10.1109/ICIP42928.2021.9506751.``

The page features ~8000 movie trailer embeddings which have been extracted using the model architecture described in the paper above. 
All embeddings are clustered using only audio-visual information without metadata, although you can select metadata from the drop down menus. 
Both T-SNE and UMAP projections are available. 
The embedding visualisation is a modified version of the output from PixPlt (Yale and Google Arts) project.

Note: Due to YoutubeAPI limits, when you select an image the video may not play correctly if the API limit is exceeded. 
