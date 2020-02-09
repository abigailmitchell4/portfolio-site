$(document).ready(() => {
  
    const $menuButton = $('#menu-button');
    const $navDropdown = $('.nav-menu-mobile');
  
    $navDropdown.hide();
  
    $menuButton.on('click', () => {
      $navDropdown.toggle();
      $menuButton.hide();
    });
  
    $navDropdown.on('mouseleave', () => {
      $navDropdown.hide();
      $menuButton.toggle();
    });
//lines

// let scroll = $window.scrollTop() + ($window.height()/2 );

  $('.line-about-me').hide()
  $('.line-work').hide()

  // document.getElementById('line-about-me').style.display = 'none'
  // document.getElementById('line-work').style.display = 'none'

  $(document).on('scroll', function() {
    if( $(this).scrollTop() >= $('#line-about-me').position().top ){
        $('.line-about-me').show();
    } 
  });

  $(document).on('scroll', function() {
    if( $(this).scrollTop() >= $('#line-work').position().top ){
        $('.line-work').show();
    }
  });


//CHANGE BACKGROUND COLOR
  $(window).scroll(function() {
  
    // selectors
    let $window = $(window),
        $body = $('body'),
        $panel = $('.panel');
        $cwo = $('#cwo-header');
        $work = $('#work-panel');
        $arrow = $('#down-arrow');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    let scroll = $window.scrollTop() + ($window.height()/2 );
    let scroll2 = $window.scrollTop() + ($window.height()/1.5 );

    $work.each(function() {
      let $this = $(this);

      if ($this.position().top <= scroll2 && $this.position().top + $this.height() > scroll2) {
        $arrow.hide();
      } else {
        $arrow.show();
      }
    })

    $panel.each(function() {
      let $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
         
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
        $body.addClass('stroke' + $(this).data('color'));
      }
    });    
  }).scroll();


//CUSTOM CURSOR
const root = document.querySelector('html')

// Real cursor element
const cursor = document.createElement('div')
cursor.classList.add('cursor')
root.appendChild(cursor)

root.addEventListener('mousemove', (e) => {
  setPosition(cursor, e)
  // div.style.backgroundColor == '#000' ? cursor.css('border-color') == '#fff' : cursor.css('border-color') == '#000'
})
function setPosition(element, e) {
  element.style.transform = "translate3d(" + (e.clientX) + "px, " + (e.clientY) + "px, 0px)"
}


//SMOOTH SCROLL
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  
});
