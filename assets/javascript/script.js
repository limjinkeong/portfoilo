$(function () {
          $('.menu .depth1 .depth1_1 .depth1_2').hover(
              function () {
                $('.depthback').stop().slideDown();
                $('.eco').stop().slideDown();
                $('.depth2_2').stop().slideDown();
              },
              function () {
                $('.depthback').stop().slideUp();
                $('.eco').stop().slideUp();
                $('.depth2_2').stop().slideUp();
              })
      })
