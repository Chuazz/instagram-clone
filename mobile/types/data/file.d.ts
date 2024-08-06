type File = {
    id: string;
    storage: string;
    filename_disk: string;
    filename_download: string;
    title: string;
    type: 'image/jpeg';
    folder: string;
    uploaded_by: string;
    uploaded_on: string;
    modified_by: unknown;
    modified_on: string;
    charset: unknown;
    filesize: number;
    width: number;
    height: number;
    duration: unknown;
    embed: unknown;
    description: unknown;
    location: unknown;
    tags: unknown;
    metadata: {};
    focal_point_x: unknown;
    focal_point_y: unknown;
    tus_id: unknown;
    tus_data: unknown;
};

export type { File };
