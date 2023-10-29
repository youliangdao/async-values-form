import { useGetUsersUserId } from "@/api/users/users";
import { SelectForm } from "./Form";
import { useGetPhotosPhotoId } from "@/api/photos/photos";
import { FormSchemaType } from "./schema";
import {
  INITIAL_ALBUM_ID,
  INITIAL_PHOTO_ID,
  INITIAL_USER_ID,
} from "@/constants";
import objectHash from "object-hash";

export const IndexPage = () => {
  const { data: user } = useGetUsersUserId(Number(INITIAL_USER_ID));
  const { data: photo } = useGetPhotosPhotoId(Number(INITIAL_PHOTO_ID));

  const defaultValues: FormSchemaType = {
    userId: INITIAL_USER_ID,
    albumId: INITIAL_ALBUM_ID,
    photoId: INITIAL_PHOTO_ID,
    accountName: user?.data.name ?? "",
    thumbnail: photo?.data.thumbnailUrl ?? "",
    email: user?.data.email ?? "",
  };

  return (
    <SelectForm key={objectHash(defaultValues)} {...{ defaultValues, photo }} />
  );
};
