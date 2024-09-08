import React from "react";

function About() {
  return (
    <>
      <div className="pt-24 pb-10 max-w-screen-xl mx-auto md:px-20 px-4 bg-gray-100 dark:bg-slate-900 dark:text-white">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">About Us</h1>
          <p>
            Welcome to Nouman's bookStore, a haven for book lovers and a
            community space where stories come alive. Our bookstore is more than
            just a place to purchase books—it's a space where readers, writers,
            and dreamers come together to celebrate the written word.
          </p>
          <h1 className="text-3xl font-bold">Our Mission</h1>
          <p>
            At Nouman's bookStore, our mission is to foster a love for reading
            and to create a space where everyone feels inspired to explore new
            ideas, cultures, and perspectives. We believe that books have the
            power to transform lives, ignite imagination, and connect people
            across the world. Our goal is to provide an extensive and
            thoughtfully curated selection of books that cater to diverse
            interests and tastes.
          </p>
        </div>
        <div className="space-y-3 mt-6">
          <h1 className="text-3xl font-bold">What We Offer</h1>
          <ul className="list-disc ml-8">
            <li>
              From literary fiction to science fiction, biographies to
              cookbooks, children's books to academic texts—we offer a vast
              collection of titles that cater to readers of all ages and
              interests.
            </li>
            <li>
              Our knowledgeable staff is passionate about books and always ready
              to help you find your next great read. Whether you’re looking for
              something specific or need a suggestion, we’re here to guide you.
            </li>
            <li>
              We regularly host book readings, author signings, book clubs, and
              literary discussions. Our events are designed to bring the
              community together and celebrate the joy of reading.
            </li>
            <li>
              Our store is designed with comfort in mind. Enjoy our cozy reading
              nooks where you can lose yourself in a book, or simply relax with
              a cup of coffee from our in-store café.
            </li>
            <li>
              We are proud to support local talent by offering a dedicated
              section for books by local authors. Discover fresh voices and
              unique stories that might not be found elsewhere.
            </li>
          </ul>
        </div>
        <div className="space-y-3 mt-6">
          <h1 className="text-3xl font-bold">Our Story</h1>
          <p>
            Nouman's bookStore was founded on the belief that books can change
            the world. What began as a small, independent bookstore has grown
            into a beloved community space where readers from all walks of life
            come to explore, learn, and connect. Our journey has been fueled by
            a passion for literature and a deep commitment to serving our
            community.
          </p>
          <h1 className="text-3xl font-bold">Join Us</h1>
          <p>
            We invite you to visit us and experience the magic of [Your
            Bookstore Name]. Whether you’re a lifelong reader or just beginning
            your literary journey, we have something for everyone. Thank you for
            being a part of our story, and we look forward to being a part of
            yours. Happy reading!
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
