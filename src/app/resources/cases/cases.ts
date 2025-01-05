import { globby } from 'globby';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { CaseStudy } from './types';

export async function getCaseStudies(): Promise<CaseStudy[]> {
    const files = await globby(['src/app/resources/cases/**/matter.md']);

    const caseStudies = await Promise.all(
        files.map(async (file) => {
            const content = await fs.readFile(file, 'utf-8');
            const { data, content: markdownContent } = matter(content);

            const slug = path.dirname(file).split('/').pop();

            if (!slug) {
                return undefined
            }

            return {
                slug,
                title: data.title,
                description: data.description,
                client: data.client,
                date: data.date,
                industry: data.industry,
                services: data.services || [],
                results: data.results || [],
                content: markdownContent,
            };
        })
    )

    return caseStudies.filter(
        study => !!study
    ).filter(
        (study) => study.title && study.description && study.client && study.industry && study.results && study.date
    ).sort((a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}
