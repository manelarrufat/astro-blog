import { z, defineCollection, reference } from "astro:content";
var blogCollection = defineCollection({
    type: 'content',
    schema: function (_a) {
        var image = _a.image;
        return z.object({
            title: z.string(),
            date: z.date(),
            description: z.string(),
            image: image().refine(function (img) { return img.width < 1200; }, {
                message: 'Image should be lower than 1200px'
            }),
            // Relació
            // author: z.string(),
            author: reference('author'),
            // Relació
            tags: z.array(z.string()),
            // Boolean
            isDraft: z.boolean().default(false),
        });
    },
});
var authorCollection = defineCollection({
    type: 'data',
    schema: function (_a) {
        var image = _a.image;
        return z.object({
            name: z.string(),
            avatar: image(),
            twitter: z.string(),
            linkedIn: z.string(),
            github: z.string(),
            bio: z.string(),
            subtitle: z.string(),
        });
    },
});
export var collections = {
    blog: blogCollection,
    author: authorCollection,
};
