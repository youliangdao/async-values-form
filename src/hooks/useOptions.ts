import { getGetAlbumsQueryKey, useGetAlbums } from "@/api/albums/albums";
import { getGetPhotosQueryKey, useGetPhotos } from "@/api/photos/photos";
import { getGetUsersQueryKey, useGetUsers } from "@/api/users/users";

type Props = {
  userId?: string;
  albumId?: string;
};

type Option = {
  value: string;
  label: string;
};

export const useOptions = ({ userId, albumId }: Props) => {
  const { data: userOptions } = useGetUsers<Option[]>({
    query: {
      queryKey: getGetUsersQueryKey(),
      select: (data) =>
        [
          { value: "0", label: "ユーザーを選択してください" },
          ...data.data.map((user) => ({
            value: String(user.id),
            label: user.username,
          })),
        ] as Option[],
    },
  });
  const { data: albumOptions } = useGetAlbums<Option[]>({
    query: {
      queryKey: getGetAlbumsQueryKey(),
      select: (data) => {
        if (data.data.length === 0) {
          return [{ value: "0", label: "選択できるアルバムがありません" }];
        }

        return [
          { value: "0", label: "アルバムを選択してください" },
          ...data.data
            .filter((album) => album.userId === Number(userId))
            .map((album) => ({ value: String(album.id), label: album.title })),
        ] as Option[];
      },
    },
  });
  const { data: photoOptions } = useGetPhotos<Option[]>({
    query: {
      queryKey: getGetPhotosQueryKey(),
      select: (data) => {
        if (data.data.length === 0) {
          return [{ value: "0", label: "選択できる写真がありません" }];
        }

        return [
          { value: "0", label: "写真を選択してください" },
          ...data.data
            .filter((photo) => photo.albumId === Number(albumId))
            .map((album) => ({
              value: String(album.id),
              label: album.title,
            })),
        ] as Option[];
      },
    },
  });

  return {
    userOptions: userOptions || [
      { value: "0", label: "選択できるユーザーがいません" },
    ],
    albumOptions: albumOptions || [
      { value: "0", label: "選択できるアルバムがありません" },
    ],
    photoOptions: photoOptions || [
      { value: "0", label: "選択できる写真がありません" },
    ],
  };
};
