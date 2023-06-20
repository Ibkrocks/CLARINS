  // THIS CONTAINS THE JAVASCRIPT FOR THE CAROUSEL AND THE SCROLLABLE IMAGES ON ALL PRODUCTS
var app = angular.module("myApp", ["ngRoute"]);

app.controller("HomeCtrl", function ($scope, $timeout) {
  $scope.images = [
    {
      src: "clarins-pictures\\lip-gloss-best-selling.jpg",
      alt: "BEST SELLING PRODUCTS",
      title: "BEST SELLING PRODUCTS",
      description:
        "A 2-in-1 balm and highlighter that nourishes and plumps lips with 3D shine",
    },
    {
      src: "clarins-pictures\\Best-selling-2.jpg",
      alt: "BEST SELLING PRODUCTS",
      title: "BEST SELLING PRODUCTS",
      description:
        "Merci, Mom Celebrate Mother’s Day with a gift from Clarins.",
    },
    {
      src: "clarins-pictures\\Double-serum-best-selling-3.jpg",
      alt: "BEST SELLING PRODUCTS",
      title: "BEST SELLING PRODUCTS",
      description: "NEW Double Serum Light Texture",
    },
  ];

  var currentIndex = 0;

  $scope.currentImage = $scope.images[currentIndex];

  var nextImage = function () {
    currentIndex += 1;

    if (currentIndex >= $scope.images.length) {
      currentIndex = 0;
    }

    $scope.currentImage = $scope.images[currentIndex];

    $timeout(nextImage, 6000);
  };

  $timeout(nextImage, 6000);
}); // Change image every 5 seconds

app.controller("myController", function ($scope) {
  $scope.currentImageIndex = 0; // initial index of the first image array
  $scope.images = [
    "clarins-pictures\\body-cream1.jpg",
    "clarins-pictures\\body-cream2.jpg",
    "clarins-pictures\\body-cream3.jpg",
    "clarins-pictures\\body-cream4.jpg",
  ]; // array of image file names

  $scope.changeImage = function () {
    $scope.currentImage = $scope.images[$scope.currentImageIndex];
  };

  // Initialize currentImage to the URL of the first image
  $scope.changeImage();

  $scope.previousImage = function () {
    $scope.currentImageIndex--;
    if ($scope.currentImageIndex < 0) {
      $scope.currentImageIndex = $scope.images.length - 1;
    }
    $scope.changeImage();
  };

  $scope.nextImage = function () {
    $scope.currentImageIndex++;
    if ($scope.currentImageIndex >= $scope.images.length) {
      $scope.currentImageIndex = 0;
    }
    $scope.changeImage();
  };

  $scope.currentImageIndex1 = 0; // initial index of the second image array
  $scope.images1 = [
    "clarins-pictures\\Sunscreen1.jpg",
    "clarins-pictures\\Sunscreen2.jpg",
    "clarins-pictures\\Sunscreen3.jpg",
    "clarins-pictures\\Sunscreen4.jpg",
  ]; // array of image file names

  $scope.changeImage1 = function () {
    $scope.currentImage1 = $scope.images1[$scope.currentImageIndex1];
  };

  // Initialize currentImage2 to the URL of the first image
  $scope.changeImage1();

  $scope.previousImage1 = function () {
    $scope.currentImageIndex1--;
    if ($scope.currentImageIndex1 < 0) {
      $scope.currentImageIndex1 = $scope.images1.length - 1;
    }
    $scope.changeImage1();
  };

  $scope.nextImage1 = function () {
    $scope.currentImageIndex1++;
    if ($scope.currentImageIndex2 >= $scope.images1.length) {
      $scope.currentImageIndex1 = 0;
    }
    $scope.changeImage1();
  };

  $scope.currentImageIndex2 = 0; // initial index of the second image array
  $scope.images2 = [
    "clarins-pictures\\energy-emulsion1.jpg",
    "clarins-pictures\\energy-emulsion2.jpg",
    "clarins-pictures\\energy-emulsion3.jpg",
    "clarins-pictures\\energy-emulsion4.jpg",
  ]; // array of image file names

  $scope.changeImage2 = function () {
    $scope.currentImage2 = $scope.images2[$scope.currentImageIndex2];
  };

  // Initialize currentImage2 to the URL of the first image
  $scope.changeImage2();

  $scope.previousImage2 = function () {
    $scope.currentImageIndex2--;
    if ($scope.currentImageIndex2 < 0) {
      $scope.currentImageIndex2 = $scope.images2.length - 1;
    }
    $scope.changeImage2();
  };

  $scope.nextImage2 = function () {
    $scope.currentImageIndex2++;
    if ($scope.currentImageIndex2 >= $scope.images2.length) {
      $scope.currentImageIndex2 = 0;
    }
    $scope.changeImage2();
  };

  $scope.currentImageIndex3 = 0; // initial index of the third image array
  $scope.images3 = [
    "clarins-pictures\\foundation1.jpg",
    "clarins-pictures\\foundation2.jpg",
    "clarins-pictures\\foundation3.jpg",
  ]; // array of image file names

  $scope.changeImage3 = function () {
    $scope.currentImage3 = $scope.images3[$scope.currentImageIndex3];
  };

  // Initialize currentImage3 to the URL of the first image
  $scope.changeImage3();

  $scope.previousImage3 = function () {
    $scope.currentImageIndex3--;
    if ($scope.currentImageIndex3 < 0) {
      $scope.currentImageIndex3 = $scope.images3.length - 1;
    }
    $scope.changeImage3();
  };

  $scope.nextImage3 = function () {
    $scope.currentImageIndex3++;
    if ($scope.currentImageIndex3 >= $scope.images3.length) {
      $scope.currentImageIndex3 = 0;
    }
    $scope.changeImage3();
  };

  $scope.currentImageIndex4 = 0; // initial index of the second image array
  $scope.images4 = [
    "clarins-pictures\\mascara1.jpg",
    "clarins-pictures\\mascara2.jpg",
    "clarins-pictures\\mascara3.jpg",
    "clarins-pictures\\mascara4.jpg",
  ]; // array of image file names

  $scope.changeImage4 = function () {
    $scope.currentImage4 = $scope.images4[$scope.currentImageIndex4];
  };

  // Initialize currentImage4 to the URL of the first image
  $scope.changeImage4();

  $scope.previousImage4 = function () {
    $scope.currentImageIndex4--;
    if ($scope.currentImageIndex4 < 0) {
      $scope.currentImageIndex4 = $scope.images4.length - 1;
    }
    $scope.changeImage4();
  };

  $scope.nextImage4 = function () {
    $scope.currentImageIndex4++;
    if ($scope.currentImageIndex4 >= $scope.images4.length) {
      $scope.currentImageIndex4 = 0;
    }
    $scope.changeImage4();
  };

  $scope.currentImageIndex5 = 0; // initial index of the second image array
  $scope.images5 = [
    "clarins-pictures\\eye-liner1.jpg",
    "clarins-pictures\\eye-liner2.jpg",
  ]; // array of image file names

  $scope.changeImage5 = function () {
    $scope.currentImage5 = $scope.images5[$scope.currentImageIndex5];
  };

  // Initialize currentImage5 to the URL of the first image
  $scope.changeImage5();

  $scope.previousImage5 = function () {
    $scope.currentImageIndex5--;
    if ($scope.currentImageIndex5 < 0) {
      $scope.currentImageIndex5 = $scope.images5.length - 1;
    }
    $scope.changeImage5();
  };

  $scope.nextImage5 = function () {
    $scope.currentImageIndex5++;
    if ($scope.currentImageIndex5 >= $scope.images5.length) {
      $scope.currentImageIndex5 = 0;
    }
    $scope.changeImage5();
  };

  $scope.currentImageIndex6 = 0; // initial index of the second image array
  $scope.images6 = [
    "clarins-pictures\\lipstick1.jpg",
    "clarins-pictures\\lipstick2.jpg",
    "clarins-pictures\\lipstick3.jpg",
    "clarins-pictures\\lipstick4.jpg",
  ]; // array of image file names

  $scope.changeImage6 = function () {
    $scope.currentImage6 = $scope.images6[$scope.currentImageIndex6];
  };

  // Initialize currentImage6 to the URL of the first image
  $scope.changeImage6();

  $scope.previousImage6 = function () {
    $scope.currentImageIndex6--;
    if ($scope.currentImageIndex6 < 0) {
      $scope.currentImageIndex6 = $scope.images6.length - 1;
    }
    $scope.changeImage6();
  };

  $scope.nextImage6 = function () {
    $scope.currentImageIndex6++;
    if ($scope.currentImageIndex6 >= $scope.images6.length) {
      $scope.currentImageIndex6 = 0;
    }
    $scope.changeImage6();
  };

  $scope.currentImageIndex7 = 0; // initial index of the second image array
  $scope.images7 = [
    "clarins-pictures\\make-up-remover1.jpg",
    "clarins-pictures\\make-up-remover2.jpg",
    "clarins-pictures\\make-up-remover3.jpg",
  ]; // array of image file names

  $scope.changeImage7 = function () {
    $scope.currentImage7 = $scope.images7[$scope.currentImageIndex7];
  };

  // Initialize currentImage2 to the URL of the first image
  $scope.changeImage7();

  $scope.previousImage7 = function () {
    $scope.currentImageIndex7--;
    if ($scope.currentImageIndex7 < 0) {
      $scope.currentImageIndex7 = $scope.images7.length - 1;
    }
    $scope.changeImage7();
  };

  $scope.nextImage7 = function () {
    $scope.currentImageIndex7++;
    if ($scope.currentImageIndex7 >= $scope.images7.length) {
      $scope.currentImageIndex7 = 0;
    }
    $scope.changeImage7();
  };

  $scope.currentImageIndex8 = 0; // initial index of the second image array
  $scope.images8 = [
    "clarins-pictures\\concealer1.jpg",
    "clarins-pictures\\concealer2.jpg",
    "clarins-pictures\\concealer3.jpg",
    "clarins-pictures\\concealer4.jpg",
  ]; // array of image file names

  $scope.changeImage8 = function () {
    $scope.currentImage8 = $scope.images8[$scope.currentImageIndex8];
  };

  // Initialize currentImage2 to the URL of the first image
  $scope.changeImage8();

  $scope.previousImage8 = function () {
    $scope.currentImageIndex8--;
    if ($scope.currentImageIndex8 < 0) {
      $scope.currentImageIndex8 = $scope.images8.length - 1;
    }
    $scope.changeImage8();
  };

  $scope.nextImage8 = function () {
    $scope.currentImageIndex8++;
    if ($scope.currentImageIndex8 >= $scope.images8.length) {
      $scope.currentImageIndex8 = 0;
    }
    $scope.changeImage8();
  };

  $scope.currentImageIndex9 = 0; // initial index of the second image array
  $scope.images9 = [
    "clarins-pictures\\extraordinary1.jpg",
    "clarins-pictures\\extraordinary2.jpg",
    "clarins-pictures\\extraordinary3.jpg",
    "clarins-pictures\\extraordinary4.jpg",
  ]; // array of image file names

  $scope.changeImage9 = function () {
    $scope.currentImage9 = $scope.images9[$scope.currentImageIndex9];
  };

  // Initialize currentImage9 to the URL of the first image
  $scope.changeImage9();

  $scope.previousImage9 = function () {
    $scope.currentImageIndex9--;
    if ($scope.currentImageIndex9 < 0) {
      $scope.currentImageIndex9 = $scope.images9.length - 1;
    }
    $scope.changeImage9();
  };

  $scope.nextImage10 = function () {
    $scope.currentImageIndex10++;
    if ($scope.currentImageIndex10 >= $scope.images10.length) {
      $scope.currentImageIndex10 = 0;
    }
    $scope.changeImage10();
  };

  $scope.currentImageIndex10 = 0; // initial index of the second image array
  $scope.images10 = [
    "clarins-pictures\\ressourcante1.jpg",
    "clarins-pictures\\ressourcante2.jpg",
    "clarins-pictures\\ressourcante3.jpg",
    "clarins-pictures\\ressourcante4.jpg",
  ]; // array of image file names

  $scope.changeImage10 = function () {
    $scope.currentImage10 = $scope.images10[$scope.currentImageIndex10];
  };

  // Initialize currentImage10 to the URL of the first image
  $scope.changeImage10();

  $scope.previousImage10 = function () {
    $scope.currentImageIndex10--;
    if ($scope.currentImageIndex10 < 0) {
      $scope.currentImageIndex10 = $scope.images10.length - 1;
    }
    $scope.changeImage10();
  };

  $scope.nextImage11 = function () {
    $scope.currentImageIndex11++;
    if ($scope.currentImageIndex11 >= $scope.images11.length) {
      $scope.currentImageIndex11 = 0;
    }
    $scope.changeImage11();
  };

  $scope.currentImageIndex11 = 0; // initial index of the second image array
  $scope.images11 = [
    "clarins-pictures\\dynamisant1.jpg",
    "clarins-pictures\\dynamisant2.jpg",
    "clarins-pictures\\dynamisant3.jpg",
    "clarins-pictures\\dynamisant4.jpg",
  ]; // array of image file names

  $scope.changeImage11 = function () {
    $scope.currentImage11 = $scope.images11[$scope.currentImageIndex11];
  };

  // Initialize currentImage10 to the URL of the first image
  $scope.changeImage11();

  $scope.previousImage11 = function () {
    $scope.currentImageIndex11--;
    if ($scope.currentImageIndex11 < 0) {
      $scope.currentImageIndex11 = $scope.images11.length - 1;
    }
    $scope.changeImage11();
  };

  $scope.nextImage11 = function () {
    $scope.currentImageIndex11++;
    if ($scope.currentImageIndex11 >= $scope.images11.length) {
      $scope.currentImageIndex11 = 0;
    }
    $scope.changeImage11();
  };

  $scope.currentImageIndex12 = 0; // initial index of the second image array
  $scope.images12 = [
    "clarins-pictures\\hair-conditioner1.jpg",
    "clarins-pictures\\hair-conditioner2.jpg",
    "clarins-pictures\\hair-conditioner3.jpg",
  ]; // array of image file names

  $scope.changeImage12 = function () {
    $scope.currentImage12 = $scope.images12[$scope.currentImageIndex12];
  };

  // Initialize currentImage12 to the URL of the first image
  $scope.changeImage12();

  $scope.previousImage12 = function () {
    $scope.currentImageIndex12--;
    if ($scope.currentImageIndex12 < 0) {
      $scope.currentImageIndex12 = $scope.images12.length - 1;
    }
    $scope.changeImage12();
  };

  $scope.nextImage12 = function () {
    $scope.currentImageIndex12++;
    if ($scope.currentImageIndex12 >= $scope.images12.length) {
      $scope.currentImageIndex12 = 0;
    }
    $scope.changeImage12();
  };

  $scope.currentImageIndex13 = 0; // initial index of the second image array
  $scope.images13 = [
    
    "clarins-pictures\\shampoo-bar1.jpg",
    "clarins-pictures\\shampoo-bar2.jpg",
    "clarins-pictures\\shampoo-bar3.jpg",
    "clarins-pictures\\shampoo-bar4.jpg",
  ]; // array of image file names

  $scope.changeImage13 = function () {
    $scope.currentImage13 = $scope.images13[$scope.currentImageIndex13];
  };

  // Initialize currentImage13 to the URL of the first image
  $scope.changeImage13();

  $scope.previousImage13 = function () {
    $scope.currentImageIndex13--;
    if ($scope.currentImageIndex13 < 0) {
      $scope.currentImageIndex13 = $scope.images13.length - 1;
    }
    $scope.changeImage13();
  };

  $scope.nextImage13 = function () {
    $scope.currentImageIndex13++;
    if ($scope.currentImageIndex13 >= $scope.images13.length) {
      $scope.currentImageIndex13 = 0;
    }
    $scope.changeImage13();
  };

  $scope.currentImageIndex14 = 0; // initial index of the second image array
  $scope.images14 = [
    
    "clarins-pictures\\hair-oil1.jpg",
    "clarins-pictures\\hair-oil2.jpg",
    "clarins-pictures\\hair-oil3.jpg",
    "clarins-pictures\\hair-oil4.jpg",
  ]; // array of image file names

  $scope.changeImage14 = function () {
    $scope.currentImage14 = $scope.images14[$scope.currentImageIndex14];
  };

  // Initialize currentImage14 to the URL of the first image
  $scope.changeImage14();

  $scope.previousImage14 = function () {
    $scope.currentImageIndex14--;
    if ($scope.currentImageIndex14 < 0) {
      $scope.currentImageIndex14 = $scope.images14.length - 1;
    }
    $scope.changeImage14();
  };

  $scope.nextImage14 = function () {
    $scope.currentImageIndex14++;
    if ($scope.currentImageIndex14 >= $scope.images14.length) {
      $scope.currentImageIndex14 = 0;
    }
    $scope.changeImage14();
  };

  $scope.currentImageIndex15 = 0; // initial index of the second image array
$scope.images15 = [
  "clarins-pictures\\shave-foam-gel1.jpg",
  "clarins-pictures\\shave-foam-gel2.jpg",
  "clarins-pictures\\shave-foam-gel3.jpg",
  "clarins-pictures\\shave-foam-gel4.jpg",
]; // array of image file names

$scope.changeImage15 = function () {
  $scope.currentImage15 = $scope.images15[$scope.currentImageIndex15];
};

// Initialize currentImage2 to the URL of the first image
$scope.changeImage15();

$scope.previousImage15 = function () {
  $scope.currentImageIndex15--;
  if ($scope.currentImageIndex15 < 0) {
    $scope.currentImageIndex15 = $scope.images15.length - 1;
  }
  $scope.changeImage15();
};

$scope.nextImage15 = function () {
  $scope.currentImageIndex15++;
  if ($scope.currentImageIndex15 >= $scope.images15.length) {
    $scope.currentImageIndex15 = 0;
  }
  $scope.changeImage15();
};

  $scope.currentImageIndex16 = 0; // initial index of the second image array
  $scope.images16 = [
    
    "clarins-pictures\\men-shampoo1.jpg",
    "clarins-pictures\\men-shampoo2.jpg",
    "clarins-pictures\\men-shampoo3.jpg",
    "clarins-pictures\\men-shampoo4.jpg",
  ]; // array of image file names

  $scope.changeImage16 = function () {
    $scope.currentImage16 = $scope.images16[$scope.currentImageIndex16];
  };

  // Initialize currentImage16 to the URL of the first image
  $scope.changeImage16();

  $scope.previousImage16 = function () {
    $scope.currentImageIndex16--;
    if ($scope.currentImageIndex16 < 0) {
      $scope.currentImageIndex16 = $scope.images16.length - 1;
    }
    $scope.changeImage16();
  };

  $scope.nextImage16 = function () {
    $scope.currentImageIndex16++;
    if ($scope.currentImageIndex16 >= $scope.images16.length) {
      $scope.currentImageIndex16 = 0;
    }
    $scope.changeImage16();
  };


});
