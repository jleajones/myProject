import axios from 'axios/index';

import { LEVER_URL, JOBS } from '@serverLib/constants';
import filterHandler from '@api/filters/global';
import { generateSlug } from '@serverLib/utils';
import { lever2Dispay, lever2Group } from '@serverLib/groupMappings';
import { titleReducer } from '@api/reducers';
import searchHandler from '@api/filters/search';

// export async function allJobsHandler(req, res, logger, db) {
/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export async function getJobs(req, res) {
  let finalJobs;
  // const { data: jobs } = await axios.get(LEVER_URL);
  const { data: jobs } = JOBS;
  if (req.query) {
    finalJobs = filterHandler(req.query, jobs);
  } else {
    finalJobs = jobs;
  }
  res.json(
    finalJobs.map(job => ({
      ...job,
      slug: job.text ? generateSlug(job.text) : null,
      group:
        job.categories && job.categories.team
          ? lever2Group[job.categories.team]
          : null,
      displayTeam:
        job.categories && job.categories.team
          ? lever2Dispay[job.categories.team]
          : null
    }))
  );
}

// export async function allJobTitlesHandler(req, res, logger, db) {
/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
export async function getJobTitles(req, res) {
  const { data: jobs } = await axios.get(LEVER_URL);
  // const jobs = JOBS;
  if (req.query) {
    const filteredJobs = filterHandler(req.query, jobs);
    const filteredTitles = filteredJobs.reduce(titleReducer, []);

    const matchingTitles = searchHandler(req.query, filteredTitles);
    res.json(matchingTitles);
  } else {
    const titles = jobs.reduce(titleReducer, []);
    res.json(titles);
  }
}

// export async function jobHandler(req, res, logger, db) {
export async function getJob(req, res) {
  const { data: jobs } = await axios.get(LEVER_URL);
  // const json = JOBS;
  const job = jobs.reduce((acc, curr) => {
    const {
      text,
      categories: { team }
    } = curr;
    const slug = generateSlug(text);
    if (slug === req.params.jobSlug) {
      return [
        ...acc,
        { ...curr, slug, cat: lever2Dispay[team] || `INT-${team}` }
      ];
    }
    return acc;
  }, []);

  res.json(job);
}
