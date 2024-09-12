<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use App\Repository\PostRepository;

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
    public function addPost(Request $request): JsonResponse
    {
        $res = json_decode($request->getContent(), true);
       
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/addController.php',
            'data' => $res,
        ]);
    }

    #[Route('/post/update', methods: ['PUT'])]
    public function updatePost(Request $request): JsonResponse
    {
        
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/PostController.php',
        ]);
    }

    #[Route('/post/del', methods: ['DELETE'])]
    public function deletedPost(Request $request): JsonResponse
    {
        
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/PostController.php',
        ]);
    }
}
