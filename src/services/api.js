import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/users'; 
const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImI4Y2FjOTViNGE1YWNkZTBiOTY1NzJkZWU4YzhjOTVlZWU0OGNjY2QiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJvZHVjdHNyZXZpZXdlZC01MzNkMiIsImF1ZCI6InByb2R1Y3RzcmV2aWV3ZWQtNTMzZDIiLCJhdXRoX3RpbWUiOjE3MzA5NTA4OTksInVzZXJfaWQiOiJobUZyZXRCN1lLZ2RsNFlldzRtN0ZUbE5INjYzIiwic3ViIjoiaG1GcmV0QjdZS2dkbDRZZXc0bTdGVGxOSDY2MyIsImlhdCI6MTczMDk1MDg5OSwiZXhwIjoxNzMwOTU0NDk5LCJlbWFpbCI6ImFuQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhbkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.rwwG2i-96WFgIhXBFDX7uymkIAibpcI3eEuod7V1TSBB87cPYYm1m9PgKKG3joe4dfysHka3AvT3JXdXVTojfJq_pQHIwwyo0HPrMXRbEPm13B-p_6NoNs90tV-2PGvEskXAJ6-DMDDmqqjZoWzsjolJv-DEThnM7hM8c-H_7qjqnfX4lWx1wbY18D5f6nuidO4Cjd5C2XutwXlX4_ij9978qawg412a1tIAV3Av1DcL2PDuym-CxULULcDtuhzBAkzJzJlIbrsxdR0eo7vuJcrSJ6hmLQ8mayg1pAlr9m2SkV89W6D5Ek6u0Fm02X4vZnCLHV4VnN5D5mHWUZIJLQ'

export const getRecentlyViewedProducts = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}/recentlyViewed`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      
    return response.data;
  } catch (error) {
    console.error("Error fetching recently viewed products:", error);
    throw error;
  }
};
