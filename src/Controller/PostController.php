<?php

namespace App\Controller;

use App\Entity\Post;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use App\Repository\PostRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;

class PostController extends AbstractController
{
    #[Route('/post', methods: ['GET'])]
    public function index(PostRepository $postRepository): JsonResponse
    {
        $post =  $postRepository->getPost();
        
        
        return $this->json([
            'message' => 'Success getting post',
            'status' => true,
            'post' => $post,
        ]);
    }

    #[Route('/post/add', methods: ['POST'])]
    public function addPost(Request $request, PostRepository $postRepository): JsonResponse
    {
            try{
                $data = json_decode($request->getContent());
                var_dump($data);
    
                $postRepository->addingPost($data);
    
                return $this->json([
                    'status' => true,
                    'message' => 'Se ingreso un nuevo post',
                    'data' => $data
                ]);
            }catch(\Exception $th){
                throw $th;
            }
            
        
    }

    #[Route('/post/update', methods: ['PUT'])]
    public function updatePost(Request $request, PostRepository $postRepository): JsonResponse
    {
        
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/PostController.php',
        ]);
    }

    #[Route('/post/del/{id}', methods: ['DELETE'])]
    public function deletedPost(Request $request,  PostRepository $postRepository, int $id): JsonResponse
    {
        
        try{

            $postRepository->delPost($id);

            return $this->json([
                'status' => true,
                'message' => 'Se elimino un post',
            ]);
        }catch(\Exception $th){
            throw $th;
        }
    }
}
