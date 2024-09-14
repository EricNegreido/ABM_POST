<?php

namespace App\Repository;

use App\Entity\Post;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Post>
 */
class PostRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Post::class);
    }

       /**
        * @return Post[] Returns an array of Post objects
        */
       public function getPost(): array
       {
        $entityManager = $this->getEntityManager()->getConnection();

        $sql = "SELECT * FROM post";
        $resultSet = $entityManager->executeQuery($sql);
        return $resultSet->fetchAllAssociative();
       }

       public function addingPost($data): void
       {
        $entityManager = $this->getEntityManager();
        
        $product = new Post();
        $product->setTitle($data->title);
        $product->setCategory($data->category);
        $product->setDescription($data->description);

        $entityManager->persist($product);

        $entityManager->flush();
    }


    //    public function findOneBySomeField($value): ?Post
    //    {
    //        return $this->createQueryBuilder('p')
    //            ->andWhere('p.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
