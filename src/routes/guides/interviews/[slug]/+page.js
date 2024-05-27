import { error } from '@sveltejs/kit';
import interviews from '$lib/data/characters/interviews';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const name = params.slug.replace('_', ' ');
  const interview = interviews[name];
  if (!interview) error(404, 'Not found');

  return {
    character: name,
    interview
  };
}
