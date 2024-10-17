$(document).ready(function() {
  // Add event listeners to social media icons
  $(".follow.box a").on("click", function() {
    window.open($(this).attr("href"), "_blank");
  });

  // Add event listeners to skills bars
  $(".skills-prog li").on("mouseover", function() {
    $(this).find(".bar").css("width", $(this).data("percent") + "%");
  });

  $(".skills-prog li").on("mouseout", function() {
    $(this).find(".bar").css("width", "0%");
  });
});