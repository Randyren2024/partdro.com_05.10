import { Strapi } from '@strapi/sdk-js';

const strapi = new Strapi({
  url: import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337',
  prefix: '/api',
});

export const fetchHomeContent = async () => {
  try {
    const response = await strapi.find('home-page', {
      populate: '*',
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching home content:', error);
    return null;
  }
};

export const fetchProducts = async () => {
  try {
    const response = await strapi.find('products', {
      populate: '*',
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return null;
  }
};

export const fetchBlogPosts = async () => {
  try {
    const response = await strapi.find('blog-posts', {
      populate: '*',
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return null;
  }
};

export default strapi;