import { useGetUsers, useGetUsersUserId } from "@/api/users/users";
import { SelectForm } from "./Form";
import { useGetAlbums } from "@/api/albums/albums";
import { useGetPhotos, useGetPhotosPhotoId } from "@/api/photos/photos";
import { FormSchemaType } from "./schema";
import {
  INITIAL_ALBUM_ID,
  INITIAL_PHOTO_ID,
  INITIAL_USER_ID,
} from "@/constants";

export const IndexPage = () => {
  const { isFetched: isUsersFetched } = useGetUsers();
  const { isFetched: isAlbumsFetched } = useGetAlbums();
  const { isFetched: isPhotosFetched } = useGetPhotos();

  const { data: user } = useGetUsersUserId(Number(INITIAL_USER_ID));
  const { data: photo } = useGetPhotosPhotoId(Number(INITIAL_PHOTO_ID));

  const defaultValues: FormSchemaType = {
    userId: INITIAL_USER_ID,
    albumId: INITIAL_ALBUM_ID,
    photoId: INITIAL_PHOTO_ID,
    accountName: "",
    thumbnail: "",
    email: "",
  };

  if (
    !(isUsersFetched && isAlbumsFetched && isPhotosFetched && user && photo)
  ) {
    return <p>Loading...</p>;
  }

  return <SelectForm {...{ defaultValues, user, photo }} />;
};
